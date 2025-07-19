
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
        <div className="flex flex-col items-center gap-4 mt-8">
          <Button title="Small Rounded" styles="bg-blue-500 text-white px-4 py-2 text-sm rounded-sm" />
          <Button title="Medium Rounded" styles="bg-green-500 text-white px-6 py-3 text-base rounded-md" />
          <Button title="Large Rounded" styles="bg-purple-500 text-white px-8 py-4 text-lg rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;