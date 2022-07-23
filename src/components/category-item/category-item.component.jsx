import "./category-item.component.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, key, title } = category;
  return (
    <div key={key} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl} )` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
