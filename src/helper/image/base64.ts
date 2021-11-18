export const getBase64 = async (
  file: Blob,
  callback?: (val: string | ArrayBuffer | null) => void,
) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (callback) callback(reader.result ? reader.result : '');
      resolve(reader.result ? reader.result.toString() : '');
    };
    reader.onerror = (error) => reject(error);
  });
};
