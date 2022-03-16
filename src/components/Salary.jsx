import { useState } from 'react';

function Salary() {
  const [salary, setSalary] = useState(0);
  const [form, setForm] = useState({});

  const handleChange = (evt) => {
    // const value = evt.target.value;
    // const name = evt.target.name;
    const { value, name } = evt.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCalculate = () => {
    setSalary(form.hours * form.rate);
  };

  return (
    <div>
      <h1>Salario</h1>
      <div>
        <input type="number" name="hours" placeholder="Enter hours" onChange={handleChange} />
        <input type="number" name="rate" placeholder="Enter Rate by hour" onChange={handleChange} />
        <input type="number" name="tax" placeholder="Enter tax" onChange={handleChange} />

        <button type="button" onClick={handleCalculate}>Calculate</button>
      </div>

      <div>
        <h2>
          Salary:
          {salary}
        </h2>
      </div>
    </div>
  );
}

export default Salary;
