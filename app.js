  //Definig Global Variables
  var baseURL = "https://sv443.net/jokeapi/v2";
  var categories = ["Programming"];
  var params = [
    "blacklistFlags=nsfw,religious,racist,sexist",
    "type=twopart",
    "amount=9"
  ];
  var url = baseURL + "/joke/" + categories.join(",") + "?" + params.join("&");
  var randomJokes;

  mainFunction();

  function mainFunction() {
    
    axios.get(url)
      .then(function (response) {
        console.log(response.data);

  //Call REACT Render
      ReactDOM.render(
        <App jokesRand={response.data} />,
        document.getElementById("root")
      );
      })
      .catch(function (error) {
      });   
  }

  // Header Component
  function Header() {
    return <header><h1>AWESOME RANDOM JOKES</h1></header>;
  }

  // Footer Component
  function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <p>Copyright ⓒ {currentYear}</p>
      </footer>
    );
  }

  // Note Component (requires props to get jokes)
  function Note(props) {
    return (
      props.data.map(joke =>
        <div className="card" key={joke.id.toString()}>
          <p> <b> {joke.setup} </b>
            <br></br><br></br>
            {joke.delivery} </p>
        </div>
      )
    )
  }

  //App function
  function App(props) {
    return (
      <div>
        <Header />
        <div className="gallery">
          <Note data={props.jokesRand.jokes} />
        </div>
        <Footer />
      </div>
    );
  }

