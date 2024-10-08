import firebase from "../firebase/main";
const db = firebase.firestore();

const uploadImage = async (img, path) => {
  const response = await fetch(img);
  const blob = await response.blob();
  const ref = firebase.storage().ref(path).child(img.split("/").pop());
  return ref.put(blob).then(() => {
    return ref.getDownloadURL();
  });
};

export { uploadImage };
