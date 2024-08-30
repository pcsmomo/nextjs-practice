"use server";

export const login = (values: any) => {
  console.log(values);

  // wait for 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Logged in successfully!" });
    }, 3000);
  });
};
