
function LinkCard(props: any) {
  return (
    <a href={props.route}>
      <div className="rounded-md min-w-[220px] max-w-[320px] bg-base-300">
        <figure>
          <img src={props.imgLink} className="rounded-t-md" alt="Site Preview" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-xl">{props.appName}</h2>
          <p className="justify-end line-clamp-4 h-[95px]">{props.desc}</p>
        </div>
      </div>
    </a>
  );
}
export default LinkCard;
