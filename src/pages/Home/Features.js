import FeatureCard from "../../components/Cards/FeatureCard";
import Reliable from "../../assets/images/reliable.jpg";
import Secured from "../../assets/images/secured.jpg";
import ChatSupport from "../../assets/images/chat-support.jpg";

const Features = () => {
  return (
    <section className="my-16">
      <div className="container flex flex-wrap justify-around gap-4">
        <FeatureCard
          image={Reliable}
          heading="Reliable Dealings"
          body="Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore"
        />

        <FeatureCard
          image={Secured}
          heading="Data Secured"
          body="Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore"
        />

        <FeatureCard
          image={ChatSupport}
          heading="Live Chat Supprt 24"
          body="Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore"
        />
      </div>
    </section>
  );
};

export default Features;
