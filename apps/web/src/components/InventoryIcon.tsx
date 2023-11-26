const InventoryIcon = ({ svgIcon }) => {
  return (
    <div className="flex items-center justify-center p-4 bg-white bg-opacity-50 rounded-lg shadow-md">
      <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
    </div>
  );
};

export default InventoryIcon;
