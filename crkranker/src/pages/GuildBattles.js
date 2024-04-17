import React, { useState } from 'react';

// This could be an array of objects with image and text properties
const modalsContent = [
  {
    id: 1,
    img: '/livingabyss.webp',
    text: 'The Living Abyss is a formidable and mysterious entity, an embodiment of the void itself. Appearing as a swirling mass of darkness, with tendrils of shadow that reach out to envelop its foes, this abyss does not merely defeat its enemies—it consumes them. Inhabiting the deepest, darkest corners of the kingdom, the Living Abyss is often whispered about in tales of caution among cookies. It represents the endless chasm of the unknown, ever hungry, ever waiting to engulf the light of the realm.\n\n\n',
    team: 'The ideal team for Living Abyss is Captain Caviar Cookie, Milky Way Cookie, Squid Ink Cookie, Space Doughnut, and Cotton Cookie'
  },
  {
    id: 2,
    img: '/redvelvetdragon.webp',
    text: "The Red Velvet Dragon is a majestic creature, its scales shimmering with hues of deep red and burgundy, reminiscent of the luxurious cake it's named after. This dragon exudes an aura of nobility and is revered across the kingdom for its wisdom and power. As a unique blend of beauty and strength, the Red Velvet Dragon is known for its devastating fire breath, capable of melting even the strongest defenses, and its ability to inspire courage and unity among the cookie residents.",
    team: 'The ideal team for Red Velvet Dragon is Snapdragon Cookie, Black Raisin Cookie, Prune Juice Cookie, Rebel Cookie, and Royal Margarine Cookie'
  },
  {
    id: 3,
    img: '/aod.webp',
    text: 'The Avatar of Destiny is a mystical being, embodying the forces of fate and the unknown. Shrouded in robes that shift like the sands of time, this enigmatic figure holds the power to alter the paths of all in the kingdom. With a staff topped with an ethereal orb, the Avatar of Destiny can unveil potential futures, guiding cookies towards their destiny or steering them away from impending doom. Revered and feared, this avatar plays a pivotal role in the unfolding saga of the cookie world.',
    team: 'The ideal team for Avatar of Destiny is Twizzly Gummy Cookie, Creme Brulee Cookie, Cream Puff Cookie, Madeline Cookie, and Mint Choco Cookie'
  }
];

function Modal({ content, onClick }) {
  return (
    <div style={{ display: 'inline-block', margin: '0 10px', textAlign: 'center' }}>
      <img 
        src={content.img} 
        alt="Modal" 
        style={{ width: '200px', height: 'auto', cursor: 'pointer' }} 
        onClick={() => onClick(content.id)} 
      />
    </div>
  );
}

function GuildBattles() {
  const [activeModalId, setActiveModalId] = useState(null);

  const handleImageClick = (id) => {
    setActiveModalId(id);
  };

  return (
    <div style={{background: 'rgba(0, 0, 0, 0.7)'}}>
    <h2>Guild Battle Page</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {modalsContent.map((content) => (
          <Modal key={content.id} content={content} onClick={handleImageClick} />
        ))}
      </div>
      {modalsContent.map((content) => {
        if (activeModalId === content.id) {
          return (
            <div key={content.id} style={{ textAlign: 'center' }}>
              <p>{content.text}</p>
              <p>{content.team}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default GuildBattles;
