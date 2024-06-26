const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
`;
const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: #d1d5db;
  color: #374151;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  ${({ $invalid }) =>
    $invalid &&
    `
    color: #ef4444;
    background-color: #fed2d2;
    border-color: #f73f3f;
  `}
`;

export default function InputField({ invalid, label, ...props }) {
  return (
    <p className="paragraph">
      {/* add $ to avoid property clashing */}
      <Label $invalid={invalid}>{label}</Label>
      <Input {...props} />
    </p>
  );
}
