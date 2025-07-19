
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />

      <div className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button title="Small Rounded" className="text-sm rounded-sm" />
          <Button title="Medium Rounded" className="text-base rounded-md" />
          <Button title="Large Rounded" className="text-lg rounded-full px-6 py-3" />
        </div>
      </div>
    </div>
  );
};

export default Landing;