import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useImage } from "../../../../hooks/useImage";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import type { productType } from "@/types/product";
import { Button, CircularProgress, Dialog, TextField } from "@mui/material";
import { Upload } from "@mui/icons-material";
import { supabase } from "../../../../createClient";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (product: productType) => void;
}

const schema = yup.object().shape({
  name: yup.string().required("Debes de ingresar un titulo").max(20),
  price: yup.string().required("Debes de agregar un precio"),
  typeCategory: yup.string().required("Debes de agregar una categoría"),
  img: yup.mixed().required("Debes de agregar una imagen"),
});

export const CreateProductFragment = ({
  isOpen,
  onClose,
  onSubmit,
}: IModalProps) => {
  const { control, getValues, formState, setValue, watch } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      price: "",
      typeCategory: "",
      img: "",
    },
    resolver: yupResolver(schema),
  });

  const { errors } = formState;
  const { img } = watch();

  const { imageCompress } = useImage();

  const [loading, setLoading] = useState(false);
  const handleUploadOrDrop = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      event.preventDefault();

      const target = (event as React.ChangeEvent<HTMLInputElement>).target;
      if (!target.files) return;
      const compressedFile = await imageCompress(target.files[0], 0.4);
      setValue("img", compressedFile);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const uploadFile = async (file: File) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const { id: userId } = user;

    const { data, error } = await supabase.storage
      .from("productsImg")
      .upload(`${userId}/${uuidV4()}`, file);
    if (error) {
      console.error("Error uploading file: ", error);
    } else {
      return data.path;
    }
  };

  const handleCreateProduct = async () => {
    const { name, price, typeCategory, img } = getValues();

    const path = await uploadFile(img as File);

    onSubmit({ name, price, typeCategory, img: path as string });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="flex flex-col p-4 gap-4">
        <div className="relative group border-2 border-black rounded-lg text-center p-2 cursor-pointer hover:border-blue-600 transition-all h-[320px] overflow-hidden">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleUploadOrDrop}
            className="absolute top-0 left-0 w-full h-full opacity-0 z-50"
          />
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <>
              {img ? (
                <div className="w-full h-full relative">
                  <img
                    src={URL.createObjectURL(img as Blob)}
                    className="w-full h-full object-cover group-hover:opacity-20 transition-all duration-300 rounded-lg"
                  />
                  <Upload className="absolute z-40 text-transparent group-hover:text-blue-600 group-hover:top-1/2 group-hover:-translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-300 hidden group-hover:block" />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
                  <Upload />

                  <p className="group-hover:text-blue-600">
                    Arrastra o selecciona una imagen
                  </p>
                </div>
              )}
            </>
          )}
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>

        <Controller
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              error={!!formState.errors.name}
              helperText={formState.errors.name?.message}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          name="price"
          render={({ field }) => (
            <TextField
              {...field}
              label="Price"
              type="number"
              error={!!formState.errors.price}
              helperText={formState.errors.price?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="typeCategory"
          render={({ field }) => (
            <TextField
              {...field}
              label="Type Category"
              error={!!formState.errors.typeCategory}
              helperText={formState.errors.typeCategory?.message}
            />
          )}
        />

        <div className="flex justify-between gap-4">
          <Button color="error" onClick={onClose}>
            Close
          </Button>
          <Button
            disabled={!formState.isValid}
            color={!formState.isValid ? "secondary" : "primary"}
            onClick={handleCreateProduct}
          >
            Add
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
