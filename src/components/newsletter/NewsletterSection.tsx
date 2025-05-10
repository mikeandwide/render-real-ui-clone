
import React from 'react';
import { useForm } from 'react-hook-form';
import { EmailInput } from '@/components/ui/input/EmailInput';

interface NewsletterFormData {
  email: string;
}

export const NewsletterSection: React.FC = () => {
  const { register, handleSubmit } = useForm<NewsletterFormData>();

  const onSubmit = (data: NewsletterFormData) => {
    console.log('Newsletter signup:', data);
    // Handle newsletter signup
  };

  return (
    <section className="flex justify-between items-center max-md:flex-col max-md:gap-10">
      <div className="flex flex-col items-start gap-[72px] w-[498px] max-md:w-full">
        <div className="flex flex-col items-start gap-7 w-[459px] max-md:w-full">
          <h2 className="text-2xl font-bold text-black">JOIN #MIKEANDWIDE</h2>
          <p className="text-sm font-bold text-black opacity-60 leading-[19px]">
            Sign up and be the first to know about new arrivals, exclusive promotions and the lates news from the World of Mike &amp; Wide. Plus, enjoy 10% off your next order.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <EmailInput register={register} />
        </form>
      </div>
      <div className="relative w-[289.5px] h-[319px] max-md:w-full max-md:flex max-md:justify-center">
        <div className="absolute w-[242px] h-[319px] bg-[#121415]" />
        <img
          src="public/lovable-uploads/10fa74a9-3898-41cf-9c42-9154ec883429.png"
          alt="Newsletter promotion"
          className="absolute w-[289.5px] h-[193px] left-[-145px] top-[63px] max-lg:static max-lg:left-auto max-lg:top-auto"
        />
      </div>
    </section>
  );
};
