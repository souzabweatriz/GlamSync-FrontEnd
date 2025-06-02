import Header from "../../components/Header";
import styles from "./dresses.module.css";
import SearchBar from "../../components/SearchBar";
import CategoryMenu from "../../components/CategoryMenu";   
import FeedCard from "../../components/FeedCard";
import CommentList from "../../components/CommentList";

export default function Dresses() {
    return (
        <div className={styles.container}>
            <Header />
            <SearchBar />
            <CategoryMenu />
            <div className={styles.feedSection}>
                <FeedCard />
                <CommentList />
            </div>
        </div>
    );
}