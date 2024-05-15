import { Dispatch, SetStateAction } from "react";

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

const tipOptions = [
  {
    id: "tip-0",
    value: 0,
    label: "No",
  },
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

const TipPercentageForm = ({
  setTip,
  tip: tipValue,
}: TipPercentageFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>
      <form action="">
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex items-center gap-1">
            <input
              type="radio"
              name="tip"
              id={tip.id}
              value={tip.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipValue === tip.value}
            />
            <label htmlFor={tip.id}>{tip.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPercentageForm;
