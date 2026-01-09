interface Props {
    title: string;
    selected: boolean;
}

const Category = ({ title, selected }: Props) => {
    return (
        <div className={`px-4 py-1 text-sm font-semibold ${!selected ? "bg-gray" : "bg-secondary text-black"} rounded-3xl border border-[var(--gray-border)]`}>
            <p>{title}</p>
        </div>
    )
}

export default Category
