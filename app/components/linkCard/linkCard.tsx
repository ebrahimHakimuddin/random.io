function LinkCard(props: any) {
  
  return (
    <a href={props.route}>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={props.imgLink} alt="Site Preview" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.appName}</h2>
          <p>{props.desc}</p>
        </div>
      </div>
    </a>
  );
}
export default LinkCard;
