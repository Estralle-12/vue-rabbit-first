import request from "@/utils/http";

export const getDatail = (id) => {
  return request({
    url: "/goods",
    params: {
      id,
    },
  });
};
