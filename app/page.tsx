import ExperienceSection from '@/components/experience-section/experience-section'
import ProfileSection from '@/components/profile-section/profile-section'
import ProjectsSection from '@/components/projects-section/projects-section'
import SpheresLine from '@/components/three/spheres-line'

export default function Home() {
  return (
    <main>
      <ProfileSection />
      <ProjectsSection />
      <div className="relative mt-10">
        <SpheresLine />
        <ExperienceSection />
      </div>
    </main>
  )
}
