import IndividualBookComponent from "./IndivudalBookComponent";

export default function Gallery({ images }) {
  // this gallery component should take a prop (a parameter) which contains an array of images
  // that array of images should then be rendered to the page
  // however, I can use ANOTHER component for each individual image.
  return (
    <>
      <p>Hello i am the gallery</p>
      <p>Below you will find some really nice pictures!</p>
      <p>You can click on them soon!</p>
      {images.map(function (individualImage) {
        return <IndividualBookComponent individualImage={individualImage} />;
      })}
    </>
  );
}
