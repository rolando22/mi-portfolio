import { SkillsCard } from '../../components/SkillsCard';
import { useEffectElement } from '../../hooks/useEffectElement';
import { skills } from '../../data/skills';

import './Skills.css';

export function Skills() {
    const { node } = useEffectElement({ styles: 'Skills-container effect' });

    return (
        <section className="Skills">
            <h2>Habilidades</h2>
            <div ref={node} className="Skills-container">
                {skills.map(skill => 
                    <SkillsCard key={skill.id} title={skill.title} technologies={skill.technologies} />
                )}
            </div>
        </section>
    );
}
