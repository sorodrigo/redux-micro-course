import { connect } from "react-redux";
import App from "./App";
import { getOddPostsWithUserPhoto } from "./post.selectors";

const mapStateToProps = state => ({
  posts: getOddPostsWithUserPhoto(state)
});

export default connect(mapStateToProps)(App);
