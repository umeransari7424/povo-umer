import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function Features() {
  const [show, setShow] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalText, setModalText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (title, text) => {
    setShow(true);
    setModalHeading(title);
    setModalText(text);
  };

  const carddata = [
    { imag : "Assets/crafting.svg",
      title: "In-game items crafting",
      text: `In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games and other game genres. It allows the users to use basic tools within the game to construct a tool for themselves to use later, more likely for the purpose of competitive edge over other participants. Other game genres where crafting tool is available are, FPS team fortress 2, which allows its users to combine different weapons to create a new one. Or, sandbox Minecraft, which allows players to create and repair their weapons`,
    },
    {
      imag : "Assets/crosschain.png",
      title: "Cross chain interpretability & custom wallet",
      text: `DeFi has a motive to incorporate traditional financial services in the cryptocurrency ecosystem. This can only be possible if each blockchain in the ecosystem can communicate and transfer information and data to other blockchains. A reliable and smooth transaction among these blockchain will enable to introduce traditional financial services to the digital currency ecosystem. Moreover, some platforms offer custom wallets where one can store more than one currency and use the interchangeable.`,
    },
    {
      imag : "Assets/multiverse.png",
      title: "Multiverse gaming",
      text: `The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically travel from one universe to the other with advancements in their levels and gaming tools. Sharded virtual worlds such as Ultima online are similar innature to multiverse games, however transportation and communication in sharderd worlds is not as easy as the traditional multiverse games`,
    },
    {
      imag : "Assets/tokenize.png",
      title: "Tokenize character  items",
      text: `Povo is one of those games that have tokenized their characters. Meaning that, you can now advance your levels within the game and monetize your virtual rewards. These virtual rewards can then be converted in tangible assets, traded or swapped with other monetized digital funds. Povo made it possible through the use of Non-fungible tokens (NFTs). It uses NFTs to monetized your virtual rewards.`,
    },

    {
      imag : "Assets/gamer.svg",
      title: "Gamer/devs can introduce their own token",
      text: `Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely store their in-game assets. These in-gameassets can then be stored in the form of a token. And these token can in turn be monetized or swapped with other digital funds. This facility is provided to both developers and gamers.`,
    },
    {
      imag : "Assets/store.png",
      title: "Dapp Store and game studio integration",
      text: `Decentralized applications are a set of programs that harness excess power from different nodes globally. These are community driven application. One example of theseare bitcoins. The integration of Dapps and gaming can create a brainchild which will allow making features of blockchains in gaming. These features might include, a decentralized gaming structure, secure storage of in-game assets, trading of gaming tokens, and interoperability among different games.`,
    },
  ];

  return (
    <div className="feature">
      <div className="container text-center py-5">
        <div className="row m-auto py-5">
          <h1>Povo Features</h1>
        </div>
        <div className="row m-auto">
          {carddata.map((data, index) => (
            <div className="col-md-4 text-center py-3">
              <div className="card pb-5 p-4">
                <div >
                  <img
                    className="img-fluid craft"
                    src={data.imag}
                    alt="In Game Crafting"
                  />
                </div>{" "}
                <br />
                <br />
                <div>
                  <h3 className="item">{data.title}</h3>
                  <p className="text-start itempara">
                    {data.text.slice(0, 120)}...
                  </p>
                </div>
                <div className="text-end btnmore ">
                  <Button
                    className="btn-success readmore"
                    onClick={() => handleShow (data.title, data.text)}
                  >
                    <b>Read More</b>
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
      </Modal>

          {/* <div className="col-md-4 text-center py-3">
            <div className="card pb-5 p-4 itempara2">
              <div>
                <img
                  className="img-fluid craft"
                  src="Assets/crosschain.png"
                  alt="cross chain"
                />
              </div>{" "}
              <br />
              <h3>Cross chain interpretability & custom wallet</h3>
              <br />
              <p className="text-start ">
                DeFi has a motive to incorporate traditional financial services
                in the cryptocurrency ecosystem. This can only be possible if
                each blockchain in the
              </p>
              <div className="text-end ">

              <Button className=" readmore"  onClick={() => handleShow('Cross chain interpretability  & custom wallet','DeFi has a motive to incorporate traditional financial services in the cryptocurrency ecosystem. This can only be possible if each blockchain in the ecosystem can communicate and transfer information and data to other blockchains. A reliable and smooth transaction among these blockchain will enable to introduce traditional financial services to the digital currency ecosystem. Moreover, some platforms offer custom wallets where one can store more than one currency and use the interchangeable.')}>
                <b>Read More</b>
              </Button> */}

          {/* </div>
            </div>
          </div> */}
          {/* <div className="col-md-4 text-center py-3">
            <div className="card pb-5 p-4">
              <div>
                <img
                  className="img-fluid multivers"
                  src="Assets/multiverse.png"
                  alt="multiverse"
                />
              </div>{" "}
              <br />
              <h3 className="item">
                Multiverse <br /> Gaming
              </h3>
              <br />
              <p className="text-start itempara">
              The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically travel from one
              </p>
              <div className="text-end ">

              <Button className="btn-success readmore"  onClick={() => handleShow('Multiverse gaming','The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically travel from one universe to the other with advancements in their levels and gaming tools. Sharded virtual worlds such as Ultima online are similar innature to multiverse games, however transportation and communication in sharderd worlds is not as easy as the traditional multiverse games')}>
                <b>Read More</b>
              </Button>
              */}

          {/* </div>
            </div>
          </div> */}
        </div>
        {/* <div className="row m-auto">
          <div className="col-md-4 text-center py-3">
            <div className="card pb-5 p-4 itempara2">
              <div>
                <img
                  className="img-fluid tokenize"
                  src="Assets/tokenize.png"
                  alt="Tokenize"
                />
              </div>{" "}
              <br />
              <h3>
                Tokenize character <br /> items
              </h3>
              <br />
              <p className="text-start ">
                Povo is one of those games that have tokenized their characters.
                Meaning that, you can now advance your levels within the game
              </p>
              <div className="text-end ">

              <Button className="btn-success readmore"  onClick={() => handleShow('Multiverse gaming','Povo is one of those games that have tokenized their characters. Meaning that, you can now advance your levels within the game and monetize your virtual rewards. These virtual rewards can then be converted in tangible assets, traded or swapped with other monetized digital funds. Povo made it possible through the use of Non-fungible tokens (NFTs). It uses NFTs to monetized your virtual rewards.')}>
                <b>Read More</b>
              </Button>
            
             </div>
            </div> */}
        {/* </div> */}
        {/* <div className="col-md-4 text-center py-3">
            <div className="card pb-5 p-4">
              <div>
                <img
                  className="img-fluid gamer"
                  src="Assets/gamer.svg"
                  alt="Gamer"
                />
              </div>{" "}
              <br />
              
              <h3 className="item">{title3}</h3>
              <br />
              <p className="text-start itempara">
              Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely
              </p>
              <div className="text-end mb-5">

              <Button className="btn-success readmore"  onClick={()=>handleShow(title3, text3)}>
                <b>Read More</b>
              </Button>
              */}
        {/* </div>
            </div>
          </div> */}
        {/* <div className="col-md-4 text-center py-3">
            <div className="card pb-5 p-4 itempara2">
                <div className="card-body">

              <div>
                <img
                  className="img-fluid gamer"
                  src="Assets/store.png"
                  alt="Dapp Store"
                  />
              </div>{" "}
              <br />
              <h3>Dapp Store and game studio integration</h3>
              <br />
              <p className="text-start ">
                Decentralized applications are a set of programs that harness
                excess power from different nodes globally.
              </p>
              <div className="text-end ">

              <Button className="btn-success readmore"  onClick={() => handleShow('Dapp Store and game studio integration','Decentralized applications are a set of programs that harness excess power from different nodes globally. These are community driven application. One example of theseare bitcoins. The integration of Dapps and gaming can create a brainchild which will allow making features of blockchains in gaming. These features might include, a decentralized gaming structure, secure storage of in-game assets, trading of gaming tokens, and interoperability among different games.')}>
                <b>Read More</b>
              </Button>
              <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        
      </Modal> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Features;
