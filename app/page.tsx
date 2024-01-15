import ProjectModal from "@/components/misc/ProjectModal";
import AboutmeScreen from "@/components/screens/AboutmeScreen";
import IntroScreen from "@/components/screens/IntroScreen";
import KnowledgeScreen from "@/components/screens/KnowledgeScreen";
import ProjectsScreen from "@/components/screens/ProjectsScreen";

export default function Home() {
  return (
    <>
      <IntroScreen />
      <AboutmeScreen />
      <KnowledgeScreen />
      <ProjectsScreen />
      <ProjectModal/>
    </>
  );
}
