import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent mx="auto" h="auto" w="auto">
        <ModalBody p={0}>
          <Image src={imgUrl} maxH="600px" maxW="900px" />
        </ModalBody>
        <ModalFooter
          backgroundColor="#353431"
          borderBottomRadius="6px"
          height="32px"
          py="20px"
        >
          <Link href={imgUrl} color="#F3F2F2" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
