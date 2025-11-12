/* eslint-disable @typescript-eslint/no-explicit-any */
import { url } from "../utils";


export async function getUnicUserspi(id: string) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${url}/leads/listUnic/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching lead:", error);
    throw error;
  }
}
export async function getUserspi() {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${url}/leads/list/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching leads:", error);
    throw error;
  }
}

export async function deleteUserspi(id: string) {
  try {
    const token = localStorage.getItem("token");

    await fetch(`${url}/leads/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    throw error;
  }
}

export async function createUserspi(data: any) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${url}/leads/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar lead");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating lead:", error);
    throw error;
  }
}

export async function editUserspi(
  id: string,
  { name, email, phone, job_title, birth_date, message }: any
) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${url}/leads/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        name, 
        email, 
        phone, 
        job_title, 
        birth_date, 
        message 
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar lead");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating lead:", error);
    throw error;
  }
}