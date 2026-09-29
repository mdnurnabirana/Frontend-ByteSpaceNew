type ProgressCardProps = {
  tallLabel?: boolean;
};

export default function ProgressCard({ tallLabel = false }: ProgressCardProps) {
  return (
    <div className="flex w-[232px] flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[20px]">
      <p
        className={`text-body-s font-medium text-gray-950 ${tallLabel ? "leading-6" : "leading-[1.2]"}`}
      >
        Learning Progress
      </p>
      <p className="font-poppins text-5xl leading-[1.2] font-semibold tracking-[-0.01em] text-gray-950">
        55%
      </p>
      <div className="h-2 w-[200px] rounded-3xl bg-smoke">
        <div className="h-2 w-[112px] rounded-3xl bg-lime" />
      </div>
    </div>
  );
}
