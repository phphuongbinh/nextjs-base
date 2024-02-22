import { LayoutMain } from "@/components/layouts";
import { addNewProperty } from "@/store/Properties.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

const CreatePage = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addNewProperty,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
  });
  const handleCreateNewProperty = () => {
    mutation.mutate();
  };
  return (
    <LayoutMain>
      <button onClick={handleCreateNewProperty}>Add new property</button>
    </LayoutMain>
  );
};

export default CreatePage;
