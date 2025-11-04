"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Utilise mailto pour ouvrir l'application mail du visiteur
    window.location.href = `mailto:contact@cocoonchic.com?subject=Message de ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message + "\n\nDe: " + formData.email)}`
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-[var(--dark)]">Contactez-nous</h1>
      <p className="text-[var(--secondary)] mb-8">
        Une question, un retour ou une demande spéciale ? Envoyez-nous un message via ce formulaire.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium text-[var(--dark)]">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium text-[var(--dark)]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-medium text-[var(--dark)]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
          />
        </div>

        <Button type="submit" className="bg-[var(--accent)] text-white hover:bg-[var(--accent)]/90">
          Envoyer
        </Button>
      </form>
    </div>
  )
}
