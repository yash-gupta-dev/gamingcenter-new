interface Props {
    title: string;
    selected: boolean;
}

const Category = ({ title, selected }: Props) => {
    return (
        <div className={`px-4 py-2 text-sm font-semibold ${!selected ? "bg-border hover:bg-gray" : "bg-secondary text-black"} rounded-3xl border border-[var(--gray-border)] cursor-pointer transition-all duration-500`}>
            <p>{title}</p>
        </div>
    )
}

export default Category
