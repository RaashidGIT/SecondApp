import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Lili Rochefort</Accordion.Header>
        <Accordion.Body>
        Lili Rochefort, the enigmatic heiress of the prestigious Rochefort family, is a fighter known for her breathtaking agility and high-flying acrobatics. Born into a life of luxury in Paris, Lili's upbringing was marked by both opulence and a strict regimen of elite training. Her father, a renowned businessman, intended for her to follow in his footsteps, but Lili had other plans.

From a young age, Lili was captivated by the thrill of physical prowess and combat. She trained in various martial arts disciplines, blending her innate grace with the disciplined techniques of Capoeira and the dynamic, fluid movements of parkour. Her unique fighting style reflects her personality—elegant yet fierce, with a penchant for showmanship and daring maneuvers.

Despite her privileged background, Lili is driven by a deep sense of personal freedom and the desire to prove herself in the fighting world. Her journey into the Tekken tournament is not just a quest for victory but a means of breaking free from her family’s expectations and establishing her own legacy.

Lili's signature moves include the "Rochefort Rising," a high-flying kick that leaves her opponents reeling, and the "Gleaming Mirage," a dazzling combination of flips and strikes that showcase her acrobatic prowess. Her fighting style is as much about art as it is about combat, making her a mesmerizing opponent in the ring.

While her refined demeanor often masks her competitive spirit, Lili is fiercely dedicated to her craft. She fights not only for personal glory but also to inspire others to chase their own dreams, no matter how unconventional they may seem. Her journey in Tekken 8 promises to be a blend of elegance and explosiveness, as she continues to redefine what it means to be a warrior of both class and strength.


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Noctis Lucis Caelum</Accordion.Header>
        <Accordion.Body>
        Noctis Lucis Caelum, the Crown Prince of the Kingdom of Lucis, is a formidable and enigmatic figure in the world of Tekken 8. Known for his regal bearing and extraordinary combat skills, Noctis wields both his royal heritage and his remarkable abilities with a commanding presence.

As the heir to the Lucis throne, Noctis was raised in a world steeped in ancient traditions and profound responsibility. Trained from a young age in the art of combat by the most skilled knights and magicians of his kingdom, he possesses unparalleled prowess with his weaponry and an innate mastery over the mystical powers of the Crystal. His fighting style integrates the use of various Royal Arms, each with unique abilities that enhance his already formidable skills.

Noctis’s most distinctive trait is his control over space-time, allowing him to teleport instantaneously during battle. This ability, combined with his agility and the devastating power of his weapons, makes him a virtually unpredictable opponent. His signature moves include the “Warp Strike,” a rapid teleportation attack that strikes with pinpoint precision, and the “Astral Fury,” a devastating flurry of attacks empowered by the Crystal’s magic.

Despite his royal status, Noctis is driven by a profound sense of duty and a personal quest for justice. His journey to the Tekken tournament is not just a quest for honor and glory, but also a pursuit of answers to the mysteries surrounding his kingdom and his own destiny. He fights to protect his people, uphold his family's legacy, and confront the shadows that threaten his realm.

Noctis's entrance into the Tekken arena introduces a blend of royal elegance and fierce combat expertise. His presence is both a symbol of his lineage and a testament to his personal strength, as he faces new challengers and forges his path through the trials of the tournament.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;