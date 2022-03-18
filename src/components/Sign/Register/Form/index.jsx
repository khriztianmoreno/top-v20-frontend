import useForm from '../../../../hooks/useForm';

function FormRegister() {
  const { form, handleChange } = useForm({});

  return (
    <form>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            USER
          </span>
          <input
            name="name"
            type="text"
            value={form?.name}
            defaultValue={form?.name}
            className="form-control"
            placeholder="Your name"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <hr className="hr-xs" />

      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            ICON
          </span>
          <input
            name="email"
            type="email"
            value={form?.email}
            defaultValue={form?.email}
            className="form-control"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <hr className="hr-xs" />

      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            ICON
          </span>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button className="btn btn-primary btn-block" type="submit">
        Login
      </button>
    </form>
  );
}

export default FormRegister;
