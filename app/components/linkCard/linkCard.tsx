function LinkCard(props: any) {
  return (
    <div className="">
      <a href={props.route}>
        <div className="hover:opacity-50 hover:scale-110  rounded-md w-[320px]  bg-base-300">
          <figure>
            <img
              src={props.imgLink}
              className="rounded-t-md"
              alt="Site Preview"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold text-xl">{props.appName}</h2>
            <p className="justify-end line-clamp-3 h-[76px]">{props.desc}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
export default LinkCard;
