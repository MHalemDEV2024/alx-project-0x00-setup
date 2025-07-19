
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <h1 className="text-3xl font-bold text-white-800 mb-6 ">Landing Page</h1>
      <div className="flex flex-row gap-[26px] mt-4">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="flex flex-col items-center mt-6 space-y-4">
        <h2 className="text-2xl font-semibold text-white-700 mb-4">Buttons</h2>
        <div className="flex flex-row items-center gap-4 mt-8">
          <Button title="Small Rounded" styles="bg-[#F9F9F9] text-black px-4 py-2 text-sm rounded-sm" />
          <Button title="Medium Rounded" styles="bg-[#F9F9F9] text-black px-6 py-3 text-base rounded-md" />
          <Button title="Rounded Large" styles="bg-[#F9F9F9] text-black px-6 py-3 rounded-lg" />
          <Button title="Rounded Full" styles="bg-[#F9F9F9] text-black px-6 py-3 rounded-full" />
          
        </div>
      </div>
    </div>
  );
};

export default Landing;