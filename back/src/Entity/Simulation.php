<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\SimulationRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=SimulationRepository::class)
 */
class Simulation
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbrBill;

    /**
     * @ORM\Column(type="integer")
     */
    private $hourlyRate;

    /**
     * @ORM\Column(type="integer")
     */
    private $timePerBill;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNbrBill(): ?int
    {
        return $this->nbrBill;
    }

    public function setNbrBill(int $nbrBill): self
    {
        $this->nbrBill = $nbrBill;

        return $this;
    }

    public function getHourlyRate(): ?int
    {
        return $this->hourlyRate;
    }

    public function setHourlyRate(int $hourlyRate): self
    {
        $this->hourlyRate = $hourlyRate;

        return $this;
    }

    public function getTimePerBill(): ?int
    {
        return $this->timePerBill;
    }

    public function setTimePerBill(int $timePerBill): self
    {
        $this->timePerBill = $timePerBill;

        return $this;
    }
}
