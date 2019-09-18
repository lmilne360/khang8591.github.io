import Head from "next/head";

const Layout = props => (
  <div>
    <Head>
      <title>Khang Nguyen</title>
      <link rel="stylesheet" href="/static/fonts/segoe-ui/style.css" />
      <link
        rel="stylesheet"
        href="/static/fonts/fontawesome/fontawesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    {props.children}
    <style jsx global>{`
      .section {
        padding: 0 2em;
        margin-bottom: 5em;
      }

      .section .content {
        margin: 0 auto;
        max-width: 1280px;
        padding: 0 15px;
      }
    `}</style>
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossOrigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossOrigin="anonymous"
    ></script>
  </div>
);

export default Layout;
