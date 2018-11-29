<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class InmailModel extends CI_Model
{
   function __construct()
   {
        parent::__construct();
   }


  function get_inmail($id){
        //Inicio da montagem do select
        $this->db->select('res.id as id,
        res.name as name,
        res.email as email,
        res.photo as photo,
        con.contact_second_id as contact_second_id,
        msg.message as message
        ');
        
        //Seta from
        $this->db->from('ls_user as res');
        //Seta o Join com a tabela de fotos
        $this->db->join('ls_contact as con', 'res.id = con.contact_first_id');

        $this->db->join('ls_user_message as msg', 'res.id = msg.receiver_id');

        //Executa a query
        $this->db->where('con.contact_second_id', $id);
        $query = $this->db->get();
        //Verifica se retornou alguma informacao
        if ($query->num_rows() > 0)
        {
            $data = $query->result();
            //Retorna o resultado da query
            return $data;
        }
        else
            return array();
    }


  function get_inmail_enviados($id){
        //Inicio da montagem do select
        $this->db->select('res.id as id,
        res.name as name,
        res.email as email,
        res.photo as photo,
        con.contact_first_id as contact_first_id,
        msg.message as message
        ');
        
        //Seta from
        $this->db->from('ls_user as res');
        //Seta o Join com a tabela de fotos
        $this->db->join('ls_contact as con', 'res.id = con.contact_first_id');

        $this->db->join('ls_user_message as msg', 'res.id = msg.sender_id');

        //Executa a query
        $this->db->where('con.contact_second_id', $id);
        $query = $this->db->get();
        //Verifica se retornou alguma informacao
        if ($query->num_rows() > 0)
        {
            $data = $query->result();
            //Retorna o resultado da query
            return $data;
        }
        else
            return array();
    }    

}