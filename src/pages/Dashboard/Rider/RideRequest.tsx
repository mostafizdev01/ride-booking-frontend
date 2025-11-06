import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  from: z.string().min(3, "From location is required"),
  to: z.string().min(3, "To location is required"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  seats: z.number().min(1, "At least 1 seat").max(6, "Max 6 seats allowed"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function RideRequest() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { seats: 1 },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Ride Request Submitted:", data);
    await new Promise((res) => setTimeout(res, 1000));
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
        🚗 Request a Ride
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* === Row 1: From / To === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From Location
            </label>
            <input
              type="text"
              {...register("from")}
              placeholder="Enter starting point"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 focus:outline-none"
            />
            {errors.from && (
              <p className="text-red-500 text-sm mt-1">{errors.from.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To Location
            </label>
            <input
              type="text"
              {...register("to")}
              placeholder="Enter destination"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 focus:outline-none"
            />
            {errors.to && (
              <p className="text-red-500 text-sm mt-1">{errors.to.message}</p>
            )}
          </div>
        </div>

        {/* === Row 2: Date / Time === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ride Date
            </label>
            <input
              type="date"
              {...register("date")}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 focus:outline-none"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ride Time
            </label>
            <input
              type="time"
              {...register("time")}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 focus:outline-none"
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>
        </div>

        {/* === Row 3: Seats / Notes === */}
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Seats
            </label>
            <input
              type="number"
              {...register("seats", { valueAsNumber: true })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 focus:outline-none"
              min={1}
              max={6}
            />
            {errors.seats && (
              <p className="text-red-500 text-sm mt-1">{errors.seats.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes
            </label>
            <textarea
              {...register("notes")}
              placeholder="Any extra details..."
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-400 focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>

        {/* === Submit Button === */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            {isSubmitting ? "Sending Request..." : "Submit Ride Request"}
          </button>
        </div>
      </form>
    </div>
  );
}
