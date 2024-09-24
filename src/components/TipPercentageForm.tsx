import { tipOptions } from "../data/tips";



type TipPercentageFormProps = {
  tip: number
    setTip : React.Dispatch<React.SetStateAction<number>>
}

export default function TipPercentageForm({tip, setTip}: TipPercentageFormProps) {

  

  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>

      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input 
                id={tipOption.id}
                type="radio"
                name="tip"
                value={tipOption.value}
                onChange={e => setTip(+e.target.value)}
                //Quita la seleccióm una vez se reinicia tip
                checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
