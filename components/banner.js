const Banner = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container row">
      <div className="col-8">
        <h1 className="display-4">Khang Nguyen</h1>
        <p className="lead">
         I'm a developer specialised in Drupal.
        </p>
      </div>

      <img className="col-4" src="https://picsum.photos/300/300" />
    </div>
    <style jsx>
      {`
        .jumbotron {
          background-color: #fafafa;
        }

        .container.row{
            margin: 0 auto;
        }
      `}
    </style>
  </div>
);

export default Banner;
