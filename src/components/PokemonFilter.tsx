const PokemonFilter = ({
    filter,
    onChange
}: {
    filter: string;
    onChange: (value: string) => void;
}) => (
    <input
        value={filter}
        onChange={e => onChange(e.target.value)}
    />
);

export default PokemonFilter;