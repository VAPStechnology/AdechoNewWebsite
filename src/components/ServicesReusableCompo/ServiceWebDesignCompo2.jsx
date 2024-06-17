function ServiceWebDesignCompo2({ item1 }) {
    return (
      <>
        <div className="flex justify-center folder-wrapper lg:w-[35rem] lg:h-[25.2rem] md:w-[30rem] md:h-[20rem] w-[20rem] h-[15rem] mt-[5rem] font-Poppins max-w-[100rem] group">
          <div
            className="folder-shape bg-blue-200 rounded-2xl md:pl-10 md:pr-10 pl-2 pr-2"
            style={{ backgroundImage: `url(${item1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
          </div>
        </div>
      </>
    );
  }
  
  export default ServiceWebDesignCompo2;
  