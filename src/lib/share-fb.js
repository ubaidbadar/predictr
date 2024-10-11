export default function shareFB(_) {
    console.log(_);
    const url = "https://stockalgos.com/leaderboard/post/67055752a2231d01492531b9";
    window.open(`https://www.facebook.com/dialog/share?app_id=985020255379356&display=popup&href=${encodeURIComponent(url)}&redirect_uri=${encodeURIComponent(url)}`, 'facebook-share-dialog', 'width=800,height=600');
}