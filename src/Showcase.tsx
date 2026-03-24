import { Button } from "./Button";

export const Showcase = () => {
  return (
    <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
      <h2>Buttons</h2>

      <div style={{ display: "flex", gap: 12 }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>

      <h2>Sizes</h2>

      <div style={{ display: "flex", gap: 12 }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      <h2>Full Width</h2>

      <Button fullWidth>Full Width Button</Button>
    </div>
  );
};