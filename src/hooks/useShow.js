export default function useShow() {
    const [className, setClass] = useState("");
    return { className, open: () => setClass("open"), close: () => setClass("close") }
}