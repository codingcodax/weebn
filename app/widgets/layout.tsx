const EditorLayout = ({ children }) => {
  return (
    <div className='flex h-screen flex-col items-center justify-center p-4 text-[#37352f] dark:bg-[#191919] dark:text-[#d3d3d3]'>
      {children}
    </div>
  );
};

export default EditorLayout;
