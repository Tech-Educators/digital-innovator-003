export default function IndividualBookComponent({ individualImage }) {
  return (
    <div>
      <p>{individualImage.title}</p>
      <img src={individualImage.imgSource} alt={individualImage.imgAlt} />
    </div>
  );
}
