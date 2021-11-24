import HomeWorkIcon from "@material-ui/icons/HomeWork";
import InfoIcon from "@material-ui/icons/Info";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const sections = [
  { title: "Home", icon: <HomeWorkIcon />, url: "/" },
  // { title: 'About Game', icon: <InfoIcon />, url: "/register" },
  // { title: 'Game Stats', icon: <EqualizerIcon />, url: "/" },
  // { title: 'Profile', icon: <RecentActorsIcon />, url: "/" },
  // { title: 'Logout', icon: <ExitToAppIcon />, url: "/" }
];
export const categories = [
  {
    category: "Movie",
    pic: "http://devinardya-quizmaster.surge.sh/static/media/movie-icon.719897dc.svg",
    setCat: "Entertainment: Film",
    categoryId: 11,
  },
  {
    category: "Music",
    pic: "http://devinardya-quizmaster.surge.sh/static/media/music-icon.469e959f.svg",
    setCat: "Entertainment: Musicals & Theatres",
    categoryId: 12,
  },
  {
    category: "Book N Comic",
    pic: "http://devinardya-quizmaster.surge.sh/static/media/books-icon.3b876aa2.svg",
    setCat: "Entertainment: Comics",
    categoryId: 10,
  },
];
