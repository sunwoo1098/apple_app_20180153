import PropTypes from "prop-types";

function Apple({name, picture, rating}) {
  return (
    <div>
      <h2>introduce {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const AppleILike = [
  {
    id: 1,
    name: 'iPad air',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faddonshop.kr%2Fweb%2Fproduct%2Fextra%2Fsmall%2F202009%2F22d0eb43202ef859f48776e8f54cabee.jpg&f=1&nofb=1',
    rating: 4.7
  },
  {
    id: 2,
    name: 'iPad pro',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faddonshop.kr%2Fweb%2Fproduct%2Fextra%2Fsmall%2F20200410%2F630c37f0f4fca220ba8a05348b5adfdf.jpg&f=1&nofb=1',
    rating: 4.9
  },
  {
    id: 3,
    name: 'iPhone',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.zdnet.co.kr%2F2021%2F03%2F11%2F1f679cdb765997f6a821f7c6f2acce58.png&f=1&nofb=1',
    rating: 4.6
  },
  {
    id: 4,
    name: 'Apple Watch',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.etoday.co.kr%2Fpto_db%2F2018%2F09%2F600%2F20180913110519_1249333_873_783.png&f=1&nofb=1',
    rating: 4.7
  },
  {
    id: 5,
    name: 'macbook',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.clien.net%2Fweb%2Fapi%2Ffile%2FF01%2F4578739%2F09ae494a85ad431ca84.JPG&f=1&nofb=1',
    rating: 4.8
  },
  {
    id: 6,
    name: 'macbook pro',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkmug.co.kr%2Fdata%2Ffile%2Fsale%2F2709180498_ciezf4qA_0dd9ca7f7773d238435fdfdd07e6e097b17acc42.JPG&f=1&nofb=1',
    rating: 5
  },
  {
    id: 7,
    name: 'mac',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finfolog.kr%2Fwp-content%2Fuploads%2F2020%2F08%2Fscreen-2020-08-27-PM-5.11.33.png&f=1&nofb=1',
    rating: 4.9
  },
];

function App() {
  return (
    <div>
      {AppleILike.map(dish => 
        <Apple key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        )}
    </div>
  );
}

Apple.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};
export default App;