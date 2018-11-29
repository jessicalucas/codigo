<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class ContatoModel extends CI_Model
{
   function __construct()
   {
        parent::__construct();
   }


  function get_contato_message($id){
        //Inicio da montagem do select
        $this->db->select('res.id as id,
        res.name as name, 
        res.email as email, 
        res.photo as photo,
        con.contact_second_id as contact_second_id,
        con.id as id_contato,
        ud.about as about,
        ud.cellphone as cellphone,
        ud.type as type,
        ud.who_recommended as who_recommended
        ');
        
        //Seta from
        $this->db->from('ls_user as res');
        //Seta o Join com a tabela de fotos
        $this->db->join('ls_contact as con', 'res.id = con.contact_second_id');

        $this->db->join('ls_user_data as ud', 'res.id = ud.user_id');
        //Executa a query
        $this->db->where('con.contact_first_id', $id);
        $this->db->where('con.permission_message', '1');
        
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


  function get_contato_message_paciente($id){
        //Inicio da montagem do select
        $this->db->select('res.id as id,
        res.name as name,
        res.email as email,
        res.photo as photo,
        con.contact_second_id as contact_second_id,
        con.id as id_contato,
        ud.about as about,
        ud.cellphone as cellphone,
        ud.type as type,
        ud.who_recommended as who_recommended
        ');
        
        //Seta from
        $this->db->from('ls_user as res');
        //Seta o Join com a tabela de fotos
        $this->db->join('ls_contact as con', 'res.id = con.contact_first_id');

        $this->db->join('ls_user_data as ud', 'res.id = ud.user_id');
        //Executa a query
        $this->db->where('con.contact_second_id', $id);
        $this->db->where('con.permission_message', '1');
        
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

  function get_contato($id){    
        //Inicio da montagem do select 
        $this->db->select('res.id as id, 
        res.name as name, 
        res.email as email, 
        res.photo as photo,
        con.contact_second_id as contact_second_id,
        con.id as id_contato,
        ud.about as about,
        ud.cellphone as cellphone,
        ud.type as type,
        ud.who_recommended as who_recommended
        ');
        
        //Seta from
        $this->db->from('ls_user as res');
        //Seta o Join com a tabela de fotos
        $this->db->join('ls_contact as con', 'res.id = con.contact_second_id');

        $this->db->join('ls_user_data as ud', 'res.id = ud.user_id');
        //Executa a query
        $this->db->where('con.contact_first_id', $id);
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