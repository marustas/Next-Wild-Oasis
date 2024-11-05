import { getCountries } from '../_lib/data-service';

type SelectCoutnryProps = {
  defaultCountry: any;
  name: string;
  id: string;
  className: string;
};

type Country = {
  name: string;
  flag: string;
};

export default async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}: SelectCoutnryProps) {
  const countries: Country[] = await getCountries();
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? '';

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
